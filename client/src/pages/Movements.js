const IsSurplus = ({ total }) => {
    if (total < 0) {
        return (
            <tr>
                <td colSpan="4">
                    <center>BALANCE</center>
                </td>
                <td></td>
                <td>{total}</td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td colSpan="4">
                    <center>BALANCE</center>
                </td>
                <td>{total}</td>
            </tr>
        );
    }
};

const Movements = () => {
    const movements = [
        {
            id: 1,
            type: 'income',
            concept: 'repuesto de bicicleta',
            date: new Date(),
            amount: 5000,
        },
        { id: 2, type: 'expense', amount: 8000 },
        { id: 3, type: 'income', amount: 4000 },
        { id: 4, type: 'expense', amount: 2000 },
        { id: 5, type: 'income', amount: 5000 },
        { id: 6, type: 'expense', amount: 500 },
    ];
    let balance = 0;
    let income = '';
    let expense = '';

    return (
        <table>
            <thead>
                <tr>
                    <th>Movement</th>
                    <th>Concept</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Credit</th>
                    <th>Debit</th>
                </tr>
            </thead>
            <tbody>
                {movements.map((movement) => {
                    if (movement.type === 'income') {
                        balance += movement.amount;
                        income = movement.amount;
                        expense = '';
                    } else {
                        balance -= movement.amount;
                        expense = movement.amount * -1;
                        income = '';
                    }
                    return (
                        <tr>
                            <td>{movement.id}</td>
                            <td>{movement.concept}</td>
                            <td>{JSON.stringify(movement.date)}</td>
                            <td>{movement.type}</td>
                            <td>{income}</td>
                            <td>{expense}</td>
                        </tr>
                    );
                })}
                <IsSurplus total={balance} />
            </tbody>
        </table>
    );
};

export default Movements;
