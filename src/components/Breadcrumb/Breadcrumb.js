import React from "react"

export default function Breadcrumb() {
  return (
    <div class="ui breadcrumb">
      <a class="section">Home</a>
      <div class="divider"> / </div>
      <a class="section">Store</a>
      <div class="divider"> / </div>
      <div class="active section">T-Shirt</div>
    </div>
  )
}
