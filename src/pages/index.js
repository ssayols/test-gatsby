import { graphql } from "gatsby"
import React from "react"

class IndexComponent extends React.Component {
  render() {
    const data = this.props.data.allParametersTxt.edges
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.parameter}</td>
                <td>{row.node.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexComponent

export const IndexQuery = graphql`
  query {
    allParametersTxt {
      edges {
        node {
          parameter
          value
        }
      }
    }
  }
`
