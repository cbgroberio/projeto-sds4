import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [activepage, setActivePage] = useState (0); 

    const changePage = (index: number) => {
        setActivePage(index);
    }

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })
    
    // essa funcao observa a variavel activepage
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activepage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            });
    }, [activepage]);


    return (
        <>
            <Pagination page={page} onPageChange={changePage}/>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(x => (
                            <tr key={x.id}>
                                <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
                                <td>{x.seller.name}</td>
                                <td>{x.visited}</td>
                                <td>{x.deals}</td>
                                <td>{x.amount}</td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;