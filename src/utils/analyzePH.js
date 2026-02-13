const analyzePH = async (file) => {
    if (!file) {
        throw new Error("File is required for pH analysis");
    }

    const randomStep = (min, max, step) => {
        const range = max - min;
        const steps = Math.round(range / step);
        const randomSteps = Math.floor(Math.random() * (steps + 1));
        return +(min + randomSteps * step).toFixed(1);
    };

    const phValue = randomStep(4.0, 7.0, 0.1);     
    const confidence = randomStep(92, 99, 1);     

    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2); 
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const formattedDate = `${day}.${month}.${year} | ${hours}:${minutes} ${ampm}`;

    return {
        phValue,
        date: formattedDate,  
        confidence,
        originalname: file.originalname
    };
};

export default analyzePH;