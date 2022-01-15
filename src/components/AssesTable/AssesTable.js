import "./Table.css"
import React, { Component } from "react"
import Pagination from "../Pagination/Pagination"
import InputField from "../InputField/InputField"
import Button from "@mui/material/Button"
export class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      query_field: [],
      currentPage: 1,
      edit_row: null,
    }
  }

  paginate = (pageNumber) => this.setState({ currentPage: pageNumber })

  componentDidMount() {
    const columns = this.props.data[0] && Object.keys(this.props.data[0])
    const query_field = columns ? columns : []
    this.setState({ query_field: query_field })
  }

  queryHandler = (e) => {
    this.setState({ query: e.target.value })
  }
  filterData = (data) => {
    const matchingIndex = []

    data.forEach((row, idx) => {
      let flag = true
      this.state.query_field.forEach((field) => {
        let match = String(row[field])
          .toLowerCase()
          .indexOf(this.state.query.toLowerCase())
        if (match > -1 && flag) {
          matchingIndex.push(idx)
          flag = false
        }
      })
    })
    return this.props.data.filter((_, idx) => {
      return matchingIndex.indexOf(idx) !== -1
    })
  }

  generateStatusColor = (text) => {
    let className = "ui tag label"
    if (text === "Đang thiết lập") {
      className = "ui tag label"
    }
    if (text === "Chờ phê duyệt") {
      className = "ui red tag label"
    }
    if (text === "Đã phê duyệt") {
      className = "ui teal tag label"
    }

    return <a className={className}>{text}</a>
  }

  enabledEditField = (field) => {
    if (!this.props.enabledEditField) {
      return true
    }
    if (this.props.enabledEditField.includes(field)) {
      return false
    }
    return true
  }
  render() {
    const columns = this.props.data[0] && Object.keys(this.props.data[0])
    const indexOfLastPost = this.state.currentPage * this.props.rowPerPage
    const indexOfFirstPost = indexOfLastPost - this.props.rowPerPage
    const data = this.filterData(this.props.data)
    const currentRows = data.slice(indexOfFirstPost, indexOfLastPost)
    const padding_row = []
    for (let i = 0; i < this.props.rowPerPage - currentRows.length; i++) {
      if (!columns) {
        break
      }
      padding_row.push(
        <tr>
          {columns.map((col, idx) => {
            if (
              this.props.hidden_field &&
              this.props.hidden_field.includes(col)
            ) {
              return null
            }
            return <td key={idx}></td>
          })}
        </tr>
      )
    }

    return (
      <div className="custom-table">
        <div class="ui icon input searchfield">
          <input
            type="text"
            placeholder="Tên mục tiêu ví dụ : Phê duyệt công việc"
            onChange={this.queryHandler}
          />
          <i class="circular search link icon"></i>
        </div>
        <div className="hiddenCB">
          <div className="checkboxes">
            {columns.map((elm, idx) => {
              if (
                this.props.hidden_field &&
                this.props.hidden_field.includes(elm)
              ) {
                return null
              }
              return (
                <div>
                  <input
                    id={idx}
                    key={idx}
                    type="checkbox"
                    checked={this.state.query_field.includes(elm)}
                    onChange={(e) => {
                      const checked = this.state.query_field.includes(elm)
                      const query_field = { ...this.state }.query_field
                      if (checked) {
                        query_field.splice(query_field.indexOf(elm), 1)
                      } else {
                        query_field.push(elm)
                      }
                      this.setState({ query_field: query_field })
                    }}
                  />
                  <label htmlFor={idx}>{elm}</label>
                </div>
              )
            })}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {data[0]
                ? columns.map((elm, idx) => {
                    if (
                      this.props.hidden_field &&
                      this.props.hidden_field.includes(elm)
                    ) {
                      return null
                    }
                    return <th key={idx}>{elm}</th>
                  })
                : null}
              <th>Phê duyệt</th>
              <th>Đánh giá</th>
            </tr>
          </thead>
          <tbody>
            {currentRows[0]
              ? currentRows.map((row, idx) => {
                  let row_values = Object.values(row)
                  return (
                    <tr
                      key={idx}
                      onClick={(e) => {
                        if (this.props.rowClick) {
                          this.props.rowClick(row)
                        }
                      }}
                      onContextMenu={(e) => {
                        document.oncontextmenu = function () {
                          return false
                        }
                        if (this.props.onRightClick) {
                          this.props.onRightClick(row)
                        }
                        document.oncontextmenu = function () {
                          return true
                        }
                      }}
                    >
                      {row_values.map((row_val, td_idx) => {
                        if (
                          this.props.hidden_field &&
                          this.props.hidden_field.includes(
                            Object.keys(row)[td_idx]
                          )
                        ) {
                          return null
                        }
                        if (!this.props.editable && td_idx === 4) {
                          return (
                            <td key={td_idx}>
                              {this.generateStatusColor(row_val)}
                            </td>
                          )
                        }

                        return <td key={td_idx}>{row_val}</td>
                      })}

                      <td>
                        <button class="ui inverted violet button">
                          Phê duyệt
                        </button>
                      </td>
                      <td>
                        <button
                          className={
                            row_values[4] !== "Đã phê duyệt"
                              ? "ui inverted grey button disabled"
                              : "ui inverted purple button"
                          }
                        >
                          Đánh giá
                        </button>
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
        <Pagination
          postsPerPage={this.props.rowPerPage}
          totalPosts={this.props.data.length}
          paginate={this.paginate}
          currentPage={this.state.currentPage}
        />
      </div>
    )
  }
}

export default Table
