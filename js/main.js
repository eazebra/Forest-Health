 
mapboxgl.accessToken = 'pk.eyJ1IjoicW5uIiwiYSI6ImNsdDNxYzh2YjF6N2EybHBwZHM2endwZnAifQ.Vf6vwhN46xhlkDOdRz1Mew';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 9.75,
    minZoom: 2,
    maxZoom: 9.75,
    center: [-122.385, 47.5705],
});

const damagingAgents = [
    'Douglas-fir beetle', 'Bear', 'Tent Catapillar', 'Hardwood decline',
    'Water damage', 'Maple discoloration', 'Pacific madrone decline',
    'Root disease', 'Blowdown/wind damage', 'Fire', 'Mountain pine beetle',
    'Fir engraver', 'Silver fir beetles', 'Douglas-fir engraver',
    'Port-Orford-Cedar Root Disease', 'Unknown', 'Dying hemlock',
    'Unknown mortality', 'Unknown defoliator', 'Winter damage',
    'Leaf Rust in Poplars', 'Lodgepole needle cast', 'Hardwood decline- Maple',
    'Dead/Declining Cedar', 'Heat', 'Western pine beetle',
    'Unknown mortality- redcedar'
];

const toggles = document.getElementById('toggles');

damagingAgents.forEach(agent => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = agent.replace(/ /g, '-') + '-toggle';
    checkbox.classList.add('toggle-checkbox');
    checkbox.checked = true; // By default, all checkboxes are checked
    checkbox.onchange = () => toggleAgent(agent);

    const label = document.createElement('label');
    label.htmlFor = agent.replace(/ /g, '-') + '-toggle';
    label.textContent = agent;
    label.classList.add('toggle-label');

    toggles.appendChild(checkbox);
    toggles.appendChild(label);
});

function toggleAgent(agent) {
    const layerId = agent.toLowerCase().replace(/ /g, '-') + '-layer';
    const visibility = map.getLayoutProperty(layerId, 'visibility');
    map.setLayoutProperty(layerId, 'visibility', visibility === 'visible' ? 'none' : 'visible');
}

document.addEventListener('DOMContentLoaded', function () {
    const chartData2 = [
        ['Douglas-fir beetle', 36.84121621621622],
        ['Bear', 18.02364864864865],
        ['Tent Catapillar', 5.304054054054054],
        ['Hardwood decline', 1.9932432432432434],
        ['Water damage', 2.652027027027027],
        ['Maple discoloration', 1.875],
        ['Pacific madrone decline', 6.351351351351352],
        ['Root disease', 0.6418918918918919],
        ['Blowdown/wind damage', 0.06756756756756757],
        ['Fire', 0.15202702702702703],
        ['Mountain pine beetle', 0.16891891891891891],
        ['Fir engraver', 15.16891891891892],
        ['Silver fir beetles', 0.016891891891891893],
        ['Douglas-fir engraver', 1.8412162162162162],
        ['Port-Orford-Cedar Root Disease', 0.016891891891891893],
        ['Unknown', 0.033783783783783786],
        ['Dying hemlock', 0.016891891891891893],
        ['Unknown mortality', 0.033783783783783786],
        ['Unknown defoliator', 0.06756756756756757],
        ['Winter damage', 0.05067567567567568],
        ['Leaf Rust in Poplars', 0.11824324324324326],
        ['Lodgepole needle cast', 0.016891891891891893],
        ['Hardwood decline- Maple', 1.6047297297297296],
        ['Dead/Declining Cedar', 6.621621621621622],
        ['Heat', 0.28716216216216217],
        ['Western pine beetle', 0.016891891891891893],
        ['Unknown mortality- redcedar', 0.016891891891891893]
    ];

    var chart = c3.generate({
        bindto: '#pie-chart',
        data: {
            columns: chartData2,
            type: 'pie',
            colors: {
                'Douglas-fir beetle': '#ff0000',
                'Bear': '#00ff00',
                'Tent Catapillar': '#0000ff',
                'Hardwood decline': '#ffa500',
                'Water damage': '#ffff00',
                'Maple discoloration': '#800080',
                'Pacific madrone decline': '#008080',
                'Root disease': '#ff1493',
                'Blowdown/wind damage': '#808080',
                'Fire': '#ff4500',
                'Mountain pine beetle': '#8b4513',
                'Fir engraver': '#800000',
                'Silver fir beetles': '#808000',
                'Douglas-fir engraver': '#556b2f',
                'Port-Orford-Cedar Root Disease': '#800080',
                'Unknown': '#a9a9a9',
                'Dying hemlock': '#9370db',
                'Unknown mortality': '#f08080',
                'Unknown defoliator': '#4682b4',
                'Winter damage': '#00ced1',
                'Leaf Rust in Poplars': '#2e8b57',
                'Lodgepole needle cast': '#87ceeb',
                'Hardwood decline- Maple': '#ff7f50',
                'Dead/Declining Cedar': '#8fbc8f',
                'Heat': '#ff6347',
                'Western pine beetle': '#6a5acd',
                'Unknown mortality- redcedar': '#b0e0e6'
            }
        }
    });
});

// for ctrl z purposes, anything before this is ok and working

document.addEventListener('DOMContentLoaded', function () {
    const chartData = [
        ['Douglas-fir', 38.682432432432435],
        ['Conifer species', 18.66554054054054],
        ['Deciduous trees (Alder, Aspen)', 5.304054054054054],
        ['Hardwoods', 1.9932432432432434],
        ['All species', 3.3445945945945943],
        ['Big leaf maple', 1.875],
        ['Pacific madrone', 6.351351351351352],
        ['Western white pine', 0.10135135135135136],
        ['True firs', 15.16891891891892],
        ['True firs, western hemlock', 0.016891891891891893],
        ['Lodgepole pine', 0.08445945945945946],
        ['Port-Orford-cedar', 0.016891891891891893],
        ['Western & mountain hemlock', 0.016891891891891893],
        ['Poplars', 0.11824324324324326],
        ['Maple', 1.6047297297297296],
        ['All Cedars', 6.621621621621622],
        ['Ponderosa pine', 0.016891891891891893],
        ['Western redcedar', 0.016891891891891893]
    ];

    var chart = c3.generate({
        bindto: '#pie-chart2',
        data: {
            columns: chartData,
            type: 'pie',
            colors: {
                'Douglas-fir': '#ff0000',
                'Conifer species': '#00ff00',
                'Deciduous trees (Alder, Aspen)': '#0000ff',
                'Hardwoods': '#ffa500',
                'All species': '#ffff00',
                'Big leaf maple': '#800080',
                'Pacific madrone': '#008080',
                'Western white pine': '#ff1493',
                'True firs': '#808080',
                'True firs, western hemlock': '#ff4500',
                'Lodgepole pine': '#8b4513',
                'Port-Orford-cedar': '#800000',
                'Western & mountain hemlock': '#808000',
                'Poplars': '#556b2f',
                'Maple': '#800080',
                'All Cedars': '#a9a9a9',
                'Ponderosa pine': '#9370db',
                'Western redcedar': '#f08080'
            }
        }
    });
});


async function geojsonFetch() {
    try {
        let response = await fetch('assets/foresthealth_data.geojson');
        let foresthealth_geojson = await response.json();

        map.on('load', () => {
            map.addSource('forest-health', {
                type: 'geojson',
                data: foresthealth_geojson
            });

            damagingAgents.forEach(agent => {
                const layerId = agent.toLowerCase().replace(/ /g, '-') + '-layer';
                map.addLayer({
                    id: layerId,
                    type: 'fill',
                    source: 'forest-health',
                    paint: {
                        'fill-color': getColorForAgent(agent),
                        'fill-opacity': 0.7
                    },
                    filter: ['==', 'AGENT1_DAMAGING_AGENT', agent],
                    layout: {
                        'visibility': 'visible'
                    }
                });

                map.on('click', layerId, (e) => {
                    const affectedSpecies = e.features[0].properties.AGENT1_PRIMARY_HOST;
                    const agent1 = e.features[0].properties.AGENT1_DAMAGING_AGENT;
                    const year = e.features[0].properties.YEAR;
                    new mapboxgl.Popup()
                        .setLngLat(e.lngLat)
                        .setHTML(`<strong>Affected Species:</strong> ${affectedSpecies}<br><strong>Damaging Agent:</strong> ${agent1}<br><strong>Year:</strong> ${year}`)
                        .addTo(map);
                });
            });

            function getColorForAgent(agent) {
                switch (agent) {
                    case 'Douglas-fir beetle':
                        return '#fee5d9';
                    case 'Bear':
                        return '#fcbba1';
                    case 'Tent Catapillar':
                        return '#fc9272';
                    default:
                        return '#ffffff'; // Default color for unknown agents
                }
            }

            // const agent1 = foresthealth_geojson.features.map(feature => feature.properties.AGENT1_PRIMARY_HOST);
            // const agentCount = {};
            // agent1.forEach(agent => {
            //     agentCount[agent] = (agentCount[agent] || 0) + 1;
            // });

            // const totalDataPoints = agent1.length;
            // const agentPercentages = {};
            // Object.keys(agentCount).forEach(agent => {
            //     agentPercentages[agent] = (agentCount[agent] / totalDataPoints) * 100;
            // });

            // const chartData = Object.entries(agentPercentages).map(([agent, percentage]) => [agent, percentage]);
            // console.log(chartData)

            // const chartData2 = [
            //     ['Douglas-fir beetle', 36.84121621621622],
            //     ['Bear', 18.02364864864865],
            //     ['Tent Catapillar', 5.304054054054054],
            //     ['Hardwood decline', 1.9932432432432434],
            //     ['Water damage', 2.652027027027027],
            //     ['Maple discoloration', 1.875],
            //     ['Pacific madrone decline', 6.351351351351352],
            //     ['Root disease', 0.6418918918918919],
            //     ['Blowdown/wind damage', 0.06756756756756757],
            //     ['Fire', 0.15202702702702703],
            //     ['Mountain pine beetle', 0.16891891891891891],
            //     ['Fir engraver', 15.16891891891892],
            //     ['Silver fir beetles', 0.016891891891891893],
            //     ['Douglas-fir engraver', 1.8412162162162162],
            //     ['Port-Orford-Cedar Root Disease', 0.016891891891891893],
            //     ['Unknown', 0.033783783783783786],
            //     ['Dying hemlock', 0.016891891891891893],
            //     ['Unknown mortality', 0.033783783783783786],
            //     ['Unknown defoliator', 0.06756756756756757],
            //     ['Winter damage', 0.05067567567567568],
            //     ['Leaf Rust in Poplars', 0.11824324324324326],
            //     ['Lodgepole needle cast', 0.016891891891891893],
            //     ['Hardwood decline- Maple', 1.6047297297297296],
            //     ['Dead/Declining Cedar', 6.621621621621622],
            //     ['Heat', 0.28716216216216217],
            //     ['Western pine beetle', 0.016891891891891893],
            //     ['Unknown mortality- redcedar', 0.016891891891891893]
            // ];

            
            // var pieChart = c3.generate({
            //     size: {
            //         height: 350,
            //         width: 460
            //     },
            //     data: {
            //         columns: chartData2, // Use your chartData2 array
            //         type: 'pie', // Make a pie chart
            //         colors: { // Custom colors
            //             'Douglas-fir beetle': '#ff0000', // Red
            //             'Bear': '#00ff00', // Green
            //             'Tent Catapillar': '#0000ff', // Blue
            //             'Hardwood decline': '#ffa500', // Orange
            //             'Water damage': '#ffff00', // Yellow
            //             'Maple discoloration': '#800080', // Purple
            //             'Pacific madrone decline': '#008080', // Teal
            //             'Root disease': '#ff1493', // Pink
            //             'Blowdown/wind damage': '#808080', // Gray
            //             'Fire': '#ff4500', // Orange Red
            //             'Mountain pine beetle': '#8b4513', // Saddle Brown
            //             'Fir engraver': '#800000', // Maroon
            //             'Silver fir beetles': '#808000', // Olive
            //             'Douglas-fir engraver': '#556b2f', // Dark Olive Green
            //             'Port-Orford-Cedar Root Disease': '#800080', // Purple
            //             'Unknown': '#a9a9a9', // Dark Gray
            //             'Dying hemlock': '#9370db', // Medium Purple
            //             'Unknown mortality': '#f08080', // Light Coral
            //             'Unknown defoliator': '#4682b4', // Steel Blue
            //             'Winter damage': '#00ced1', // Dark Turquoise
            //             'Leaf Rust in Poplars': '#2e8b57', // Sea Green
            //             'Lodgepole needle cast': '#87ceeb', // Sky Blue
            //             'Hardwood decline- Maple': '#ff7f50', // Coral
            //             'Dead/Declining Cedar': '#8fbc8f', // Dark Sea Green
            //             'Heat': '#ff6347', // Tomato
            //             'Western pine beetle': '#6a5acd', // Slate Blue
            //             'Unknown mortality- redcedar': '#b0e0e6' // Powder Blue
            //         },
            //     },
            //     bindto: "#pie-chart" // Bind the chart to the placeholder element "pie-chart"
            // });
        });
    } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
    }
}

geojsonFetch();


let togglesChecked = true;

function toggleAllToggles() {
    const checkboxes = document.querySelectorAll('.toggle-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = !togglesChecked;
        const agent = checkbox.id.replace('-toggle', '').replace(/-/g, ' ');
        toggleAgent(agent); // Call toggleAgent to show/hide the corresponding layer
    });
    togglesChecked = !togglesChecked; // Update the state of togglesChecked
}

const reset = document.getElementById('reset');
reset.addEventListener('click', event => {
    map.flyTo({
        zoom: 9.75,
        minZoom: 9.75,
        maxZoom: 12,
        center: [-122.385, 47.5705],
    });
    toggleAllToggles();
});
