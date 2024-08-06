"use client";

import React, { useState } from "react";
import { IShapeProperties } from "./canvas";

interface ShapePropertiesProps {
    onChange: (property: string, value: any) => void;
    properties: IShapeProperties;
    selectedShapeId: string | null;
    updateSelectedShapeFillColor: (color: string) => void;
    updateSelectedShapeStrokeColor: (color: string) => void;
    updateSelectedShapeSize: (size: number) => void;
}

export type TShapeProperty = "circle" | "rectangle" | "line" | "brush";

export const ShapeProperties: React.FC<ShapePropertiesProps> = ({
    onChange,
    properties,
    selectedShapeId,
    updateSelectedShapeFillColor,
    updateSelectedShapeStrokeColor,
    updateSelectedShapeSize,
}) => {
    const [type, setType] = useState<TShapeProperty>("circle");

    return (
        <div>
            <div>
                <label>Type:</label>
                <select
                    value={type}
                    onChange={(evt) => {
                        const { value } = evt.target;
                        setType(value as TShapeProperty);
                        onChange("type", value);
                    }}
                >
                    <option value="circle">Circle</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="line">Line</option>
                    <option value="brush">Brush</option>
                </select>
            </div>
            <div>
                <label>Fill Color:</label>
                <input
                    type="color"
                    value={properties.fillColor}
                    onChange={(evt) => {
                        const { value } = evt.target;
                        console.log(selectedShapeId);
                        if (selectedShapeId) {
                            updateSelectedShapeFillColor(value);
                        } else {
                            onChange("fillColor", value);
                        }
                    }}
                />
            </div>
            {(properties.type === "circle" ||
                properties.type === "rectangle") && (
                <div>
                    <label>Stroke Color:</label>
                    <input
                        type="color"
                        value={properties.strokeColor}
                        onChange={(evt) => {
                            const { value } = evt.target;
                            if (selectedShapeId) {
                                updateSelectedShapeStrokeColor(value);
                            } else {
                                onChange("strokeColor", value);
                            }
                        }}
                    />
                </div>
            )}
            <div>
                <label>Stroke Width:</label>
                <input
                    type="string"
                    value={properties.size}
                    disabled={!!selectedShapeId}
                    onChange={(evt) => {
                        const { value } = evt.target;
                        if (selectedShapeId) {
                            // updateSelectedShapeSize(Number(value));
                        } else {
                            onChange("size", Number(value));
                        }
                    }}
                />
            </div>
        </div>
    );
};
