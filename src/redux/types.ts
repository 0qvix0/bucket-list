export type TodoItem = {
  id: string,
  title: string
}

export type TodoProps = {
  id: string,
  title: string,
  onClickRemove: (id: string) => {},
  onClickDone: (id: string, title: string) => {},
}