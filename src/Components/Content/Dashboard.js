import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../../Features/dashboardState/dashboardThunk";
import { DashboardItem } from "./DashboardItem";
import { Spinner } from '../Shared/Spinner';

export const Dashboard = () => {

    const dispatch = useDispatch();
    const dashboardData = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(getDashboardData());
    }, [dispatch]);

    return (
        <>
            {dashboardData.isLoading
                ?
                <Spinner />
                :
                <section id="dashboard-page" className="dashboard">
                    <h1>Dashboard</h1>
                    {!dashboardData.isLoading && dashboardData.data.length > 0
                        ?
                        <ul className="other-books-list">
                            {dashboardData.data.map(x => <DashboardItem
                                key={x._id}
                                book={x}
                            />)}
                        </ul>
                        :
                        <p className="no-books">No books in database!</p>
                    }
                </section>
            }
        </>
    );
}