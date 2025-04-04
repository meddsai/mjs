import * as React from "react"
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

import { cn } from "@/core/utils"

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any[]
    categories: string[]
    index: string
    colors?: string[]
    valueFormatter?: (value: number) => string
    startEndOnly?: boolean
    showXAxis?: boolean
    showYAxis?: boolean
    yAxisWidth?: number
    showAnimation?: boolean
    showTooltip?: boolean
    showGridLines?: boolean
    showLegend?: boolean
    autoMinValue?: boolean
    minValue?: number
    maxValue?: number
    connectNulls?: boolean
}

export function Chart({
    data,
    categories,
    index,
    colors = ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"],
    valueFormatter = (value: number) => value.toString(),
    startEndOnly = false,
    showXAxis = true,
    showYAxis = true,
    yAxisWidth = 56,
    showAnimation = true,
    showTooltip = true,
    showGridLines = true,
    showLegend = true,
    autoMinValue = false,
    minValue,
    maxValue,
    connectNulls = false,
    className,
    ...props
}: ChartProps) {
    const yAxisDomain = React.useMemo(() => {
        if (autoMinValue) {
            return [0, "auto"]
        }
        if (minValue !== undefined && maxValue !== undefined) {
            return [minValue, maxValue]
        }
        if (minValue !== undefined) {
            return [minValue, "auto"]
        }
        if (maxValue !== undefined) {
            return [0, maxValue]
        }
        return [0, "auto"]
    }, [autoMinValue, minValue, maxValue])

    return (
        <div className={cn("w-full", className)} {...props}>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    {showGridLines ? (
                        <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal={true}
                            vertical={false}
                        />
                    ) : null}
                    <XAxis
                        hide={!showXAxis}
                        dataKey={index}
                        tick={{ transform: "translate(0, 6)" }}
                        ticks={
                            startEndOnly
                                ? [data[0][index], data[data.length - 1][index]]
                                : undefined
                        }
                        fill=""
                        stroke=""
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        padding={{ left: 10, right: 10 }}
                        minTickGap={5}
                    />
                    <YAxis
                        width={yAxisWidth}
                        hide={!showYAxis}
                        axisLine={false}
                        tickLine={false}
                        type="number"
                        domain={yAxisDomain}
                        tick={{ transform: "translate(-3, 0)" }}
                        fill=""
                        stroke=""
                        fontSize={12}
                        tickFormatter={valueFormatter}
                        allowDecimals={false}
                    />
                    {showTooltip ? (
                        <Tooltip
                            wrapperStyle={{ outline: "none" }}
                            isAnimationActive={false}
                            cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="h-2 w-2 rounded-full"
                                                        style={{
                                                            backgroundColor: payload[0]?.color,
                                                        }}
                                                    />
                                                    <p className="text-sm text-muted-foreground">
                                                        {index}
                                                    </p>
                                                    <p className="text-sm font-medium text-foreground">
                                                        {label}
                                                    </p>
                                                </div>
                                                {categories.map((category, i) => (
                                                    <div key={category} className="flex items-center gap-2">
                                                        <div
                                                            className="h-2 w-2 rounded-full"
                                                            style={{
                                                                backgroundColor: colors[i],
                                                            }}
                                                        />
                                                        <p className="text-sm text-muted-foreground">
                                                            {category}
                                                        </p>
                                                        <p className="text-sm font-medium text-foreground">
                                                            {valueFormatter(
                                                                payload.find((p) => p.name === category)?.value ??
                                                                0
                                                            )}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                    ) : null}
                    {categories.map((category, i) => (
                        <Line
                            key={category}
                            name={category}
                            type="monotone"
                            dataKey={category}
                            stroke={colors[i]}
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={showAnimation}
                            connectNulls={connectNulls}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
