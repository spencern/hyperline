export default (React) => {
  const PluginWrapper = ({
    color,
    children,
    minWidth
  }) => {
    let style = {
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: '1',
      flexShrink: '0',
      alignItems: 'center',
      paddingLeft: '7px',
      paddingRight: '7px',
      borderLeft: '1px',
      borderTop: '0px',
      borderRight: '0px',
      borderBottom: '0px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 255, 255, .2)',
    }

    if (color) {
      style.color = color
    }

    if (minWidth) {
      style.minWidth = minWidth
    }

    return (
      <div style={style}>
        {children}
      </div>
    )
  }

  PluginWrapper.propTypes = {
    color: React.PropTypes.string,
    children: React.PropTypes.any,
    minWidth: React.PropTypes.string
  }

  return PluginWrapper
}
