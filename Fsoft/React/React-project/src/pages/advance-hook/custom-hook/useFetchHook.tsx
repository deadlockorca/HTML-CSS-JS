import { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

interface TodoItem {
    id: number;
    title: string;
}
interface UserItem {
    id: number;
    name: string;
}
interface FetData<T> {
    data: T[];
}
function useFetch<T>(url: string): FetData<T> {
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data: T[]) => setData(data))
    }, [url])
    return { data };
}
export function Todo() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // },[])
    const {data} = useFetch<TodoItem>('https://jsonplaceholder.typicode.com/todos');
    return <>
    {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
    </>;
}
export function User() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    },[])
    return (
        <>
            {data && data.map(((item: UserItem) => (
                <p key={item.id}>{item.name}</p>
            )))}
        </>
    )
}
export default function FetchHookExample() {
    return (
        <Fragment>
            <Row>
                <Col xs={6}>
                    <h2>Todo</h2>
                    <Todo />
                </Col>
                <Col xs={6}>
                    <h2>User</h2>
                    <User />
                </Col>
            </Row>
        </Fragment>
    )
}