import { btn, Categories } from "@/types/constants"

export interface ButtonType {
  buttonType?: btn
}

export interface NewFeed {
  categories?: Categories,
  title: String,
  detail: String,
  id: String
}