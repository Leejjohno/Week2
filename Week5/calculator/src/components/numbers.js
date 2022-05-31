const numbers = [ "7", "8", "9", 
	"4", "5", "6", 
	"1", "2", "3", 
	"0", "."];

const createNumbers = () => {
    return ( <div className="numBox">
        {numbers.map((item, index) => {
            <button onClick={() => updateCalculatorScreen(item)}
                key={index}> {item} 
            </button>
        })}
    </div>
    )
}
export default createNumbers()