import React from 'react';
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";

const CustomPopup = (params) => {
    const customIcon = new L.Icon({
        iconUrl: require('../location.png').default,
        iconSize: new L.Point(50, 50),
    })

    return (
        <Marker key={params.data.id} position={[params.data.k1, params.data.k2]} icon={customIcon}>
            <Popup>
                <div className="card">
                    <div className="header">
                        <div className="org-name">
                            {params.data.name}
                        </div>
                    </div>
                    <div className="body">
                        <div className="features">

                            {params.data.trosta === true &&
                                <div className="feature"><img src="/trosta.png"/>ТОЧКА РОСТА</div>}
                            {params.data['cos'] === true && <div className="feature"><img src="/cos.png"/>ЦОС</div>}
                            {params.data.itcube === true &&
                                <div className="feature"><img src="/itcube.png"/>IT-cube</div>}
                            {params.data.kvant === true &&
                                <div className="feature"><img src="/kvant.png"/>Кванториум</div>}

                            <div>
                                {
                                    params.data.mastery != null
                                        ?
                                        <details>
                                            <summary>В это учебном заведении есть мастерские:</summary>
                                            <div>
                                                {
                                                    params.data.mastery.map((item) => <p>{item.name}</p>)
                                                }
                                            </div>
                                        </details>
                                        :
                                        null
                                }
                            </div>
                        </div>

                        {
                            params.data.hot_meals
                                ?
                                <details>
                                    <summary>Информация об организации горячего питания</summary>
                                    <div className="hot-meals">
                                        {params.data.hot_meals}
                                    </div>
                                </details>
                                :
                                null
                        }
                    </div>

                    <div className="footer">
                        <details>
                            <summary>Контактные данные</summary>
                            <div className="contacts">
                                <div className="address">
                                    {params.data.address.code} {params.data.address.region} {params.data.address.street} д.
                                    {params.data.address.number}
                                </div>
                                {
                                    params.data.contacts.email.length > 1
                                        ?
                                        <div className="email">
                                            <p>Адрес электронной почты: </p>
                                            <p>{params.data.contacts?.email}</p>
                                        </div>
                                        :
                                        null
                                }
                                <div className="phones">
                                    {
                                        params.data.contacts.phones.length > 1
                                            ?
                                            params.data.contacts.phones.map((item) => {
                                                if (item.phone.length > 3)
                                                    return (
                                                        <div className="phone" key={item.phone}>
                                                            <p>Телефон:</p>
                                                            <p>{item.phone}</p>
                                                        </div>
                                                    )
                                            })
                                            :
                                            null
                                    }
                                </div>
                                <div className="website">
                                    {
                                        params.data.web_site.length > 6 && <a href={params.data.web_site}>
                                            Перейти на сайт
                                        </a>
                                    }
                                </div>
                            </div>
                        </details>
                    </div>
                </div>


            </Popup>
        </Marker>
    );
};

export default CustomPopup;