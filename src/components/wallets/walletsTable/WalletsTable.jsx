import './walletTable.css'

function WalletsTable({ transactions }) {
  console.log(transactions.transactions)
  return (
    <section className='transaction-table-container'>
      <h3>Historique de vos transactions</h3>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>
              <abbr title="Position">Date</abbr>
            </th>
            <th>Type</th>
            <th>Libellé</th>
            <th>
              <abbr title="Played">Montant (ù)</abbr>
            </th>
            <th>
              <abbr title="Won">Montant (krysto)</abbr>
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.transactions
            ? transactions.transactions.map((transaction) => (
                <tr>
                  <th>{new Date(transaction.created).toLocaleDateString()}</th>
                  {transaction.type === 'create' ? (
                    <td>Création monétaire</td>
                  ) : (
                    <td>Transfert</td>
                  )}

                  <td>Aucun libelée pour cette transaction</td>
                  <td>{transaction.amountUnity.toFixed(4)} ù</td>
                  <td>
                    {(
                      transaction.amountUnity / transaction.monyConvertValue
                    ).toFixed(2)}{' '}
                    Kr
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
    </section>
  )
}

export default WalletsTable
