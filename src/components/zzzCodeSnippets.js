//import uid from 'uid'
//import Route2 from './Route2'

// <DeleteButton className="delete" onClick={onDelete}>&times;</DeleteButton>

// const DeleteButton = styled.button`
//   margin-left: auto;
//   background-color: deeppink;
//   color: white;
//   border-radius: 50%;
//   padding: 2px 5px;
//   font-weight: bold;

//   .delete {
//    &:hover {
//      color: red;
//    }
//  }
// `

// const day = new Date().getDate()
// const month = new Date().getMonth()
// const year = new Date().getFullYear()
// const hour = new Date().getHours()
// const minute = new Date().getMinutes()
// const timestamp = new Date(year, month, day, hour, minute)

// static propTypes = {
//     iconName: PropTypes.oneOf(['up', 'down','left', 'right']),
//     onPost: PropTypes.func.isRequired,
//     text: PropTypes.string
//   }

// storiesOf('Song', module).add('default', () => (
//   <React.Fragment>
//     <Song
//       text={text('Song 1: text', 'Hello world')}
//       done={boolean('Song 1: done', false)}
//       onToggle={action('Song 1: onToggle')}
//       onDelete={action('Song 1: onDelete')}
//     />
//     <StyleBox h={40} />
//     <Song
//       text={text('Song 2: text', 'Lorem ipsum dolor sit')}
//       done={boolean('Song 2: done', false)}
//       onToggle={action('Song 2: onToggle')}
//       onDelete={action('Song 2: onDelete')}
//     />
//   </React.Fragment>
// ))

// storiesOf('ToggleButton', module).add('default', () => (
//   <React.Fragment>
//     <ToggleButton
//       isDefault={boolean('isDefault', true)}
//       onClick={action('onClick')}
//       defaultText={text('defaultText', 'Click me')}
//       alternativeText={text('alternativeText', 'I was clicked')}
//     />
//   </React.Fragment>
// ))

// storiesOf('DurationFillBar', module).add('default', () => (
//   <React.Fragment>
//     <DurationFillBar
//       percentage={number('percentage', 0, {
//         range: true,
//         min: 0,
//         max: 1,
//         step: 0.01
//       })}
//     />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={1 / 3} />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={1 / 2} />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={2 / 3} />
//     <StyleBox h={40} />
//     <DurationFillBar percentage={1} />
//   </React.Fragment>
// ))
