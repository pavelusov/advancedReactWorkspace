export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // Мы хотим подождать пока promise разрезолвится
  // Получить данные
  // и создать новый экшен с этими данными
  // и отправить экшн заново
  action.payload
    .then(response => {
      // 1. Создаем новый экшен
      const newAction = {
        ...action,
        payload: response // 1.1 в payload отдаем ответ
      };
      // 2. Отправляем новый экшен
      dispatch(newAction);
    })
}
