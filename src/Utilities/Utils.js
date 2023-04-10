// add to db 
import swal from 'sweetalert'
const addToDb = id => {
    let submittedData = [];

    const previousSubmittedData = localStorage.getItem('submitted-data');
    if (previousSubmittedData) {
        submittedData = JSON.parse(previousSubmittedData);
    }

    const alreadyAdded = submittedData.find(jobId => jobId === id);
    if (alreadyAdded) {
        return swal({
            title: "Good job!",
            text: "You have already applied this job!",
            icon: "success",
        });
    }
    submittedData.push(id);

    localStorage.setItem('submitted-data', JSON.stringify(submittedData));
}

// get data from DB 
const getDataFromDb = () => {
    let submittedData = [];

    const previousSubmittedData = localStorage.getItem('submitted-data');
    if (previousSubmittedData) {
        submittedData = JSON.parse(previousSubmittedData);
    }
    return submittedData
}


export { 
    addToDb,
    getDataFromDb
 }