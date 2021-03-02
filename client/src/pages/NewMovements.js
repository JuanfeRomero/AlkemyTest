const NewMovement = () =>{
    return(
        <>
            <form action="" method="post">
                <p>Type</p>
                <label htmlFor="concept"></label>
                <label htmlFor="income">Income</label>
                <input type="radio" name="type" id="type1" value="income"/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" name="type" id="type1" value="expense"/>
            </form>
        </>
    )
}

export default NewMovement;