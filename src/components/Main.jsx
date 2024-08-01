function Main() {
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <h4 className="card-word">имя</h4>
          <p className="card-translate">name</p>
          <p className="card-transcription"> |neɪm|</p>
          <p className="card-meaning">
            Личное название человека, даваемое при рождении.
          </p>
          <p className="card-subject">тема</p>
        </div>
        <div className="card-footer">
          <button className="card-deleted">Удалить</button>
          <button className="card-edit">Редактировать</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
