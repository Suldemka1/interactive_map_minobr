import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/slices/detailsSlice";

const InfoPopup = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  return (
    <div className="details">
      <div className="details__fade" onClick={() => dispatch(setData())}></div>

      <div className="details__info">
        <CgClose
          className="details__close-button"
          size={30}
          onClick={() => dispatch(setData())}
        />

        <div className="details__info__header">
          <div className="details__info__header-title">{details.data.name}</div>
          <div className="features">
            {details.data.trosta === true && (
              <div className="feature">
                <img src="/trosta.png" />
                ТОЧКА РОСТА
              </div>
            )}

            {details.data["cos"] === true && (
              <div className="feature">
                <img src="/cos.png" />
                ЦОС
              </div>
            )}

            {details.data.itcube === true && (
              <div className="feature">
                <img src="/itcube.png" />
                IT-cube
              </div>
            )}

            {details.data.kvant === true && (
              <div className="feature">
                <img src="/kvant.png" />
                Кванториум
              </div>
            )}
          </div>
          <div>
            {details.data.mastery != null ? (
              <details>
                <summary>В это учебном заведении есть мастерские:</summary>
                <div>
                  {details.data.mastery?.map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </div>
              </details>
            ) : null}
          </div>
        </div>

        <div className="details__info__body">
          <div className="programm">
            {details.data.programm.length > 1 ? (
              <details>
                <summary>Программы обучения</summary>
                <div className="programm-list">
                  {details.data.programm.map((item, index) => (
                    <div key={index} className="programm-item">
                      <div className="programm-name">
                        <p>
                          {item.name} ({item.age})
                        </p>
                      </div>
                      <div className="programm-age">
                        <p></p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ) : null}
          </div>

          <div>
            {details.data.activity.length > 1 ? (
              <details>
                <summary>Деятельность</summary>
                <div className="activity">
                  {details.data.activity.map((item, index) => (
                    <p key={index}>{item.item}</p>
                  ))}
                </div>
              </details>
            ) : null}
          </div>
          {details.data.hot_meals ? (
            <div className="details__info__body-hot-meals">
              <div>Информация об организации горячего питания</div>
              <div>{details.data.hot_meals}</div>
            </div>
          ) : null}
        </div>

        <div className="details__info__footer">
          <div className="contacts">
            <div className="">
              <h3>Контактные данные</h3>
            </div>

            <div className="address">
              <p>{details.data.address.code},</p>
              <p>{details.data.address.region},</p>
              <p>{details.data.address.street}</p>
              <p>
                д.
                {details.data.address.number}
              </p>
            </div>

            {details.data.contacts.email.length > 1 ? (
              <div className="email">
                <p>Адрес электронной почты: </p>
                <p>{details.data.contacts?.email}</p>
              </div>
            ) : null}

            <div className="phones">
              {details.data.contacts.phones.length > 1
                ? details.data.contacts.phones.map((item) => {
                    if (item.phone.length > 3)
                      return (
                        <div className="phone" key={item.phone}>
                          <p>Телефон:</p>
                          <p>{item.phone}</p>
                        </div>
                      );
                  })
                : null}
            </div>
            {details.data.web_site.length > 6 && (
              <a href={details.data.web_site} className="website">
                Перейти на сайт
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoPopup;
