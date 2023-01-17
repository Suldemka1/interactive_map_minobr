const Contacts = (params) => {
  return (
    <div className="contacts">
      <div className="">
        <h3>Контактные данные</h3>
      </div>

      <div className="address">
        <p>{params.data?.address?.code},</p>
        <p>{params.data?.address?.region},</p>
        <p>{params.data?.address?.street}</p>
        <p>
          д.
          {params.data?.address?.number}
        </p>
      </div>

      {params.data?.contacts?.email?.length > 1 ? (
        <div className="email">
          <p>Адрес электронной почты: </p>
          <p>{params.data.contacts?.email}</p>
        </div>
      ) : null}

      <div className="phones">
        {params.data?.contacts?.phones?.length > 1
          ? params.data?.contacts?.phones.map((item) => {
              if (item.phone?.length > 3)
                return (
                  <div className="phone" key={item?.phone}>
                    <p>Телефон:</p>
                    <p>{item.phone}</p>
                  </div>
                );
            })
          : null}
      </div>
      {params.data?.web_site?.length > 6 && (
        <a href={params.data?.web_site} className="website">
          Перейти на сайт
        </a>
      )}
    </div>
  );
};

export default Contacts;
