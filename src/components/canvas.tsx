"use client";

import React, { useRef, useState, useEffect } from "react";
import { ShapeProperties, TShapeProperty } from "./shape-properties";
import { useWebSockets } from "@/hooks/useWebSockets";

export interface Shape {
    type: TShapeProperty;
    x: number;
    y: number;
    endX?: number;
    endY?: number;
    radius?: number;
    width?: number;
    height?: number;
    strokeColor: string;
    size: number;
    fillColor: string;
    points?: { x: number; y: number }[];
    id: string;
}

export interface IShapeProperties {
    type: TShapeProperty;
    strokeColor: string;
    size: number;
    fillColor: string;
}

export const generateUniqueId = (): string => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 7);
    return timestamp + random;
};

export const Canvas = () => {
    const { shapes: shapesFromWebSocket, saveShapeData } =
        useWebSockets("/api/socket");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [shapes, setShapes] = useState<Shape[]>([]);
    const [currentShape, setCurrentShape] = useState<Shape | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [selectedShapeId, setSelectedShapeId] = useState<string>("");

    const [properties, setProperties] = useState<IShapeProperties>({
        type: "circle",
        strokeColor: "#000000",
        size: 2,
        fillColor: "#00FF00",
    });

    const handlePropertyChange = (property: string, value: any) => {
        setProperties((prevProps) => ({ ...prevProps, [property]: value }));
    };

    const isPointInShape = (x: number, y: number, shape: Shape): boolean => {
        switch (shape.type) {
            case "circle":
                const radius = Math.sqrt(
                    Math.pow(shape.endX! - shape.x, 2) +
                        Math.pow(shape.endY! - shape.y, 2)
                );
                return (
                    Math.sqrt(
                        Math.pow(x - shape.x, 2) + Math.pow(y - shape.y, 2)
                    ) <= radius
                );
            case "rectangle":
                return (
                    x >= shape.x &&
                    x <= shape.endX! &&
                    y >= shape.y &&
                    y <= shape.endY!
                );
            case "line":
                const distance =
                    Math.abs(
                        (shape.endY! - shape.y) * x -
                            (shape.endX! - shape.x) * y +
                            shape.endX! * shape.y -
                            shape.endY! * shape.x
                    ) /
                    Math.sqrt(
                        Math.pow(shape.endY! - shape.y, 2) +
                            Math.pow(shape.endX! - shape.x, 2)
                    );
                return distance <= shape.size / 2;
            case "brush":
                if (!shape.points) return false;
                for (let i = 0; i < shape.points.length - 1; i++) {
                    const point1 = shape.points[i];
                    const point2 = shape.points[i + 1];
                    const distance =
                        Math.abs(
                            (point2.y - point1.y) * x -
                                (point2.x - point1.x) * y +
                                point2.x * point1.y -
                                point2.y * point1.x
                        ) /
                        Math.sqrt(
                            Math.pow(point2.y - point1.y, 2) +
                                Math.pow(point2.x - point1.x, 2)
                        );
                    if (distance <= shape.size / 2) return true;
                }
                return false;
            default:
                return false;
        }
    };

    const drawShape = (
        ctx: CanvasRenderingContext2D,
        shape: Shape,
        isSelected: boolean
    ) => {
        ctx.strokeStyle = shape.strokeColor;
        ctx.lineWidth = shape.size;
        ctx.fillStyle = shape.fillColor;

        switch (shape.type) {
            case "circle":
                ctx.beginPath();
                const radius = Math.sqrt(
                    Math.pow(shape.endX! - shape.x, 2) +
                        Math.pow(shape.endY! - shape.y, 2)
                );
                ctx.arc(shape.x, shape.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = shape.fillColor;
                ctx.fill();
                ctx.stroke();
                break;
            case "rectangle":
                ctx.fillStyle = shape.fillColor;
                ctx.fillRect(
                    shape.x,
                    shape.y,
                    shape.endX! - shape.x,
                    shape.endY! - shape.y
                );
                ctx.strokeRect(
                    shape.x,
                    shape.y,
                    shape.endX! - shape.x,
                    shape.endY! - shape.y
                );
                break;
            case "line":
                ctx.strokeStyle = shape.fillColor;
                ctx.beginPath();
                ctx.moveTo(shape.x, shape.y);
                ctx.lineTo(shape.endX!, shape.endY!);
                ctx.stroke();
                break;
            case "brush":
                if (shape.points) {
                    ctx.strokeStyle = shape.fillColor;
                    ctx.beginPath();
                    ctx.moveTo(shape.points[0].x, shape.points[0].y);
                    shape.points.forEach((point) => {
                        ctx.lineTo(point.x, point.y);
                    });
                    ctx.stroke();
                }
                break;
        }

        const calculateRadius = (shape: Shape): number => {
            if (!shape.endX || !shape.endY) return 0;
            return Math.sqrt(
                (shape.endX - shape.x) ** 2 + (shape.endY - shape.y) ** 2
            );
        };

        if (isSelected) {
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 2;
            const handleSize = 8;

            if (shape.type === "circle") {
                const radius = calculateRadius(shape);
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y - radius - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.x + radius - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y + radius - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.x - radius - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                );
            } else if (shape.type === "rectangle") {
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.endX! - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.endY! - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.endX! - handleSize / 2,
                    shape.endY! - handleSize / 2,
                    handleSize,
                    handleSize
                );
            } else if (shape.type === "line") {
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                );
                ctx.fillRect(
                    shape.endX! - handleSize / 2,
                    shape.endY! - handleSize / 2,
                    handleSize,
                    handleSize
                );
            }
        }
    };

    const deleteSelectedShape = () => {
        if (selectedShapeId) {
            const updatedShapes = shapes.filter(
                (shape) => shape.id !== selectedShapeId
            );
            setShapes(updatedShapes);
            setSelectedShapeId("");
        }
    };

    const updateSelectedShapeFillColor = (color: string) => {
        if (selectedShapeId) {
            const updatedShapes = shapes.map((shape) =>
                shape.id === selectedShapeId
                    ? { ...shape, fillColor: color }
                    : shape
            );
            setShapes(updatedShapes);
        }
    };

    const updateSelectedShapeStrokeColor = (color: string) => {
        if (selectedShapeId) {
            const updatedShapes = shapes.map((shape) =>
                shape.id === selectedShapeId
                    ? { ...shape, strokeColor: color }
                    : shape
            );
            setShapes(updatedShapes);
        }
    };

    const updateSelectedShapeSize = (size: number) => {
        if (selectedShapeId) {
            const updatedShapes = shapes.map((shape) =>
                shape.id === selectedShapeId ? { ...shape, size } : shape
            );
            setShapes(updatedShapes);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        if (properties.type !== "brush") {
            let shapeClicked = false;
            for (let i = shapes.length - 1; i >= 0; i--) {
                if (isPointInShape(x, y, shapes[i])) {
                    setSelectedShapeId(shapes[i].id);
                    shapeClicked = true;
                    return;
                }
            }
    
            if (!shapeClicked) {
                setSelectedShapeId("");
            }
        }
    
        const newShape: Shape = {
            type: properties.type,
            x,
            y,
            strokeColor: properties.strokeColor,
            size: properties.size,
            fillColor: properties.fillColor,
            ...(properties.type !== "brush" && { endX: x, endY: y }),
            ...(properties.type === "brush" && { points: [{ x, y }] }),
            id: generateUniqueId(),
        };
    
        setCurrentShape(newShape);
        setIsDrawing(true);
        if (properties.type !== "brush") {
            setShapes((prevShapes) => [...prevShapes, newShape]);
        } else {
            setShapes((prevShapes) => [...prevShapes.slice(0, -1), newShape]);
        }
    };
    
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDrawing || !currentShape) return;
    
        const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        if (
            currentShape.type === "line" ||
            currentShape.type === "circle" ||
            currentShape.type === "rectangle"
        ) {
            const updatedShape = { ...currentShape, endX: x, endY: y };
            setShapes((prevShapes) => [...prevShapes.slice(0, -1), updatedShape]);
            setCurrentShape(updatedShape);
        } else if (currentShape.type === "brush" && currentShape.points) {
            const updatedShape = {
                ...currentShape,
                points: [...currentShape.points, { x, y }],
            };
            setShapes((prevShapes) => [...prevShapes.slice(0, -1), updatedShape]);
            setCurrentShape(updatedShape);
        }
    };
    
    const handleMouseUp = () => {
        if (isDrawing && currentShape) {
            setShapes((prevShapes) => [...prevShapes.slice(0, -1), currentShape]);
            saveShapeData(currentShape);
        }
        setIsDrawing(false);
        setCurrentShape(null);
    };
    

    const clearCanvas = () => {
        setShapes([]);
        localStorage.removeItem("shapes");
    };

    //   useEffect(() => {
    //     localStorage.setItem('shapes', JSON.stringify(shapes));
    //   }, [shapes]);

    //   useEffect(() => {
    //     const savedShapes = localStorage.getItem('shapes');
    //     if (savedShapes) {
    //       setShapes(JSON.parse(savedShapes));
    //     }
    //   }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapes.forEach((shape) =>
            drawShape(ctx, shape, shape.id === selectedShapeId)
        );
    }, [shapes, selectedShapeId]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (
                shapes.find(
                    (shape) => shape.x === shape.endX || shape.y === shape.endY
                )
            ) {
                setShapes((prevShapes) =>
                    prevShapes.filter(
                        (prevShape) =>
                            prevShape.x !== prevShape.endX ||
                            prevShape.y !== prevShape.endY
                    )
                );
            }
        }, 500);

        return () => clearInterval(intervalId);
    }, [shapes]);

    return (
        <div>
            <ShapeProperties
                onChange={handlePropertyChange}
                properties={properties}
                updateSelectedShapeFillColor={updateSelectedShapeFillColor}
                updateSelectedShapeStrokeColor={updateSelectedShapeStrokeColor}
                updateSelectedShapeSize={updateSelectedShapeSize}
                selectedShapeId={selectedShapeId}
            />
            <div>
                <button onClick={clearCanvas}>Clear Canvas</button>
                <button
                    onClick={deleteSelectedShape}
                    disabled={!selectedShapeId}
                >
                    Delete Selected Shape
                </button>
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    style={{ border: "1px solid black" }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                />
            </div>
        </div>
    );
};
