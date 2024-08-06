"use client";

import { Shape } from "@/components/canvas";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useWebSockets = (url: string) => {
    const socket = io(url);
    const [newShapeData, setNewShapeData] = useState<Shape | null>(null);
    const [shapes, setShapes] = useState<Shape[]>([]);

    const saveShapeData = () => {
        socket.emit("save shape data", newShapeData);
        setNewShapeData(null);
    };

    useEffect(() => {
        socket.on("get shape data", (shape) => {
            setShapes((prevShapes) => [...prevShapes, shape]);
        });
    }, []);

    return { shapes, saveShapeData };
};
