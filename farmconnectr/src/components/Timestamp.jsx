

export default function(props) {
    
    const uft = new Date(props.timestamp)


    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
    const formattedMinutes = uft.getMinutes() < 10 ? `0${uft.getMinutes()}` : uft.getMinutes()
    const formattedTimestamp = `${daysOfWeek[uft.getDay()]} at ${uft.getHours()}:${formattedMinutes}`
    
        return (
        <div>{formattedTimestamp}</div>
    )
}