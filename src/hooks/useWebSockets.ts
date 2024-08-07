"use client";

import { Shape } from "@/components/canvas";
import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export const useWebSockets = (url: string) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [shapes, setShapes] = useState<Shape[]>([]);

    const saveShapeData = useCallback(
        (newShapeData: Shape) => {
            if (socket && newShapeData) {
                socket.emit("draw", newShapeData);
            }
        },
        [socket]
    );

    useEffect(() => {
        const newSocket = io(url);
        setSocket(newSocket);

        newSocket.on("draw", (shape) => {
            setShapes((prevShapes) => [...prevShapes, shape]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [url]);

    return { shapes, saveShapeData };
};
