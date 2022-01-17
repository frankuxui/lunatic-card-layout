import styled from "styled-components";
import classNames from "classnames";

const tagVariant = [
  { name: 'primary', color: '#a300c5'  },
  { name: 'secondary', color: '#535f7a'},
  { name: 'success', color: '#02972d'  },
  { name: 'danger', color: '#c3001f'   },
  { name: 'warning', color: 'yellow'   },
  { name: 'info', color: '#00c9bb'     }
]

export const TagStyled = styled.a.attrs(( props ) => ({
  href: props.href,
  variant: props.variant
}))`
  display: inline-block;
  padding: .3rem .8rem;
  border-radius: 50rem;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .8rem;
  ${( props ) => {
    const color = tagVariant.find((x) => x.name === props.variant )
    return`
      background-color: ${color && color.color || '#838383'};
      color: ${ props.variant === 'warning' || props.variant === 'info' ? '#000' : 'white'};
      &:hover{
        color: ${ props.variant === 'warning' || props.variant === 'info' ? '#000' : 'white'};
      }
    `
  }};
`

export const Tag = ({ href, className, variant, children }) => {
  const classConfig = classNames({
    'tag': true,
    [`${className}`]: className
  })
  return(
    <TagStyled href={ href } className={ classNames( classConfig )} variant={ variant }>{ children }</TagStyled>
  )
}