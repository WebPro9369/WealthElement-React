import React from 'react'
import Link from 'next/link'
import { Popover, List, Icon } from 'antd'

export default class PopMenu extends React.Component {
  state = {
    visible: false
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible })
  }

  render() {
    const { visible } = this.state
    const { dataSource } = this.props
    return (
      <Popover
        placement="rightBottom"
        trigger="click"
        visible={visible}
        title={null}
        content={(
          <List
            className="popmenu-list"
            size="large"
            dataSource={dataSource}
            renderItem={item => (<List.Item className="popmenu-list-item"><Link href={item.link}>{item.text}</Link></List.Item>)}
          >
          </List>
        )}
        onVisibleChange={this.handleVisibleChange}
      >
        { visible ? <Icon className="popmenu-icon" type="close" /> : <Icon className="popmenu-icon" type="bars" /> }
      </Popover>
    )
  }
}
