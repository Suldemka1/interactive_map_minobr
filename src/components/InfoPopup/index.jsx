import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/slices/detailsSlice";
import "./index.scss";
import Features from "./Features";
import Mastery from "./Mastery";
import HotMeals from "./HotMeals";
import Contacts from "./Contacts";
import Activity from "./Activity";
import Programm from "./Programm";

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
          {details.data.trosta ||
          details.data.cos ||
          details.data.itcube ||
          details.data.kvant ? (
            <Features
              trosta={details.data.trosta}
              cos={details.data.cos}
              itcube={details.data.itcube}
              kvant={details.data.kvant}
            />
          ) : null}

          {details.data.mastery != null ? (
            <Mastery mastery={details.data.mastery} />
          ) : null}
        </div>

        <div className="details__info__body">
          <div>
            {details.data.programm.length > 1 ? (
              <Programm programm={details.data.programm} />
            ) : null}
          </div>

          <div>
            {details.data.activity.length > 1 ? (
              <Activity activity={details.data?.activity} />
            ) : null}
          </div>

          {details.data.hot_meals ? (
            <HotMeals hot_meals={details.data?.hot_meals} />
          ) : null}
        </div>

        <div className="details__info__footer">
          <Contacts data={details.data} />
        </div>
      </div>
    </div>
  );
};
export default InfoPopup;
