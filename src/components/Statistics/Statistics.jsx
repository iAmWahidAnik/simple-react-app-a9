// import React from 'react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const Statistics = () => {
    const data = [
        { assignment: 1, marks: 60 },
        { assignment: 2, marks: 50 },
        { assignment: 3, marks: 60 },
        { assignment: 4, marks: 55 },
        { assignment: 5, marks: 60 },
        { assignment: 6, marks: 52 },
        { assignment: 7, marks: 60 },
        { assignment: 6, marks: 60 },
    ];
    const COLORS = ['#DE3163', '#FF7F50', '#808080', '#808000', '#008080', '#6495ED', '#9FE2BF', '#6495ED', '#FF8042'];
    return (
        <div className='text-center max-w-2xl mx-auto'>
            <h1>This is statistics page!!!!</h1>
            <div className='content-center place-items-center'>
                <PieChart width={800} height={400} >
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="marks"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;