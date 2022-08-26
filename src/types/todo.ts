import { MouseEventHandler } from "react"

export interface ITodo{
  text: string,
  important: boolean,
  done: boolean,
  id: number,
  onDeleted?: MouseEventHandler<HTMLButtonElement>
}
export interface IAppState{
  todos: ITodo[]
}
