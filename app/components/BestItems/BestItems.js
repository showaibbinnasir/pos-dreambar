'use client'
import { LabelList, Pie, PieChart } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'
import React from 'react'

export default function BestItems() {
    const chartData = [
        { browser: 'chrome', visitors: 275, fill: '#3CAAFA' },
        { browser: 'safari', visitors: 200, fill: '#9631F5' },
        { browser: 'firefox', visitors: 187, fill: '#38D6EF' },
        { browser: 'edge', visitors: 173, fill: '#D638EE' },
        { browser: 'other', visitors: 90, fill: '#afbaca' },
    ]

    const chartConfig = {
        visitors: {
            label: 'Visitors',
        },
        chrome: {
            label: 'Chrome',
            color: '#3CAAFA',
        },
        safari: {
            label: 'Safari',
            color: '#9631F5',
        },
        firefox: {
            label: 'Firefox',
            color: '#38D6EF',
        },
        edge: {
            label: 'Edge',
            color: '#D638EE',
        },
        other: {
            label: 'Other',
            color: '#afbaca',
        },
    }
    return (
        <div className='flex justify-center'>
            <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Pie data={chartData} dataKey="visitors" label nameKey="browser">
                        <LabelList
                            dataKey="browser"
                            className="fill-white"
                            stroke="none"
                            fontSize={12}
                            formatter={(value) => chartConfig[value]?.label}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
            
        </div>
    )
}
