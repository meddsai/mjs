import * as React from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    TooltipProps as RechartsTooltipProps,
} from 'recharts';

import { cn } from '@/core/utils';

interface ChartData {
    name: string;
    value: number;
}

interface ChartProps {
    data: ChartData[];
    width?: number | string;
    height?: number | string;
}

function CustomTooltip({ active, payload, label }: RechartsTooltipProps<number, string>) {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {label}
                        </span>
                        <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export function Chart({ data, width = '100%', height = 300 }: ChartProps) {
    return (
        <ResponsiveContainer width={width} height={height}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={CustomTooltip} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
