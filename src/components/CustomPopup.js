import React from 'react';
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";

const CustomPopup = (params) => {
    const customIcon = new L.Icon({
        iconUrl: require('../location.png').default,
        iconSize: new L.Point(40, 47),
    })

    return (
        <Marker key={params.data.id} position={[params.data.k1, params.data.k2]} icon={customIcon}>
            <Popup>
                <div>
                    {params.data.name}
                </div>
                <div>
                    {params.data.trosta === true && <p>ТОЧКА РОСТА</p>}
                    {params.data['cos'] === true && <p>ЦОС</p>}
                </div>

                {
                    params.data.hot_meals
                        ?
                        <details>
                            <summary>Информация об организации горячего питания</summary>
                            <div>
                                {params.data.hot_meals}
                            </div>
                        </details>
                        :
                        <div>Информация по организации горячего питания отсутсвует</div>
                }

                <details>
                    <summary>Контактные данные</summary>
                    <div>
                        <div>
                            {params.data.address.code} {params.data.address.region} {params.data.address.street} д.
                            {params.data.address.number}
                        </div>
                        <div>
                            <p>Адрес электронной почты: </p>
                            <p>{params.data.contacts.email}</p>
                        </div>

                        <div className="phones">
                            {
                                params.data.contacts.phones.map((item) => {
                                    if (item.phone.length > 3)
                                        return <div key={item.phone}>
                                            <p>Телефон:</p>
                                            <p>{item.phone}</p>
                                        </div>
                                })
                            }
                        </div>

                        <div>
                            {
                                params.data.web_site.length > 6 && <a href={params.data.web_site}>
                                    Перейти на сайт
                                </a>
                            }
                        </div>
                    </div>
                </details>
            </Popup>
        </Marker>
    );
};

export default CustomPopup;