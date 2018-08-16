export const fetchDrops = () =>
    fetch('http://192.168.1.9:3000/api/drops')
        .then(res => res.json());