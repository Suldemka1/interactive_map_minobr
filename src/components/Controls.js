import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProps, setState, getState } from "../store/slices/typesSlice";
import { CgClose } from 'react-icons/cg';
import { setIsOpen } from '../store/slices/mobileMenuSlice';

const items = [
    {
        id: 1,
        name: 'podved',
        title: 'Подведомственные организации'
    },
    {
        id: 2,
        name: 'spo',
        title: 'Техникумы и Колледжи'
    },
    {
        id: 3,
        name: 'dop',
        title: 'Центры доп. образования'
    },
    {
        id: 4,
        name: 'school',
        title: 'Школы'
    },
    {
        id: 5,
        name: 'dou',
        title: 'Детские сады'
    }
]
const props = [
    {
        id: 6,
        name: 'trosta',
        title: 'Точки роста'
    },
    {
        id: 7,
        name: 'cos',
        title: 'Цифровая образовательная среда'
    },
    {
        id: 8,
        name: 'kvant',
        title: 'Кванториумы'
    },
    {
        id: 9,
        name: 'itcube',
        title: 'IT-куб'
    },
    {
        id: 10,
        name: 'mastery',
        title: 'Мастерские'
    }
]

const Controls = () => {
    const types = useSelector((state) => state.types)
    const mobile = useSelector((state) => state.mobile)
    const dispatch = useDispatch()

    return (
        <div className="filter">
            <CgClose onClick={() => dispatch(setIsOpen())} style={{ position: "absolute", right: 0, zIndex: 500, cursor: "pointer", padding: "30px 30px 0 0" }} size={40} />
            <ul className='filter-menu'>
                {
                    items.map(item =>
                        <li key={item.id} className="filter-item">
                            <input id={item.name} type={'checkbox'} className=""
                                checked={types[item.name]}
                                onChange={() => types[item.name]}
                                onClick={() => dispatch(setState(item.name))} />
                            <label htmlFor={item.name}>
                                <p className="">{item.title}</p>
                            </label>
                        </li>)

                }

                {
                    props.map(item =>
                        <li key={item.id} className="filter-item">
                            <input id={item.name} type={'checkbox'} className=""
                                checked={types[item.name]}
                                onChange={() => types[item.name]}
                                onClick={() => dispatch(setProps(item.name))} />
                            <label htmlFor={item.name}>
                                <p className="">{item.title}</p>
                            </label>
                        </li>)

                }

            </ul>
        </div>
    );
};

export default Controls;