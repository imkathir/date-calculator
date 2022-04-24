import './App.css';
import {Component} from 'react';
// import LoginControl from './logincontrol';
// import NameForm from './NameForm';

export default class App extends Component {
  state = {};
  constructor() {
    super();
    // let startDate = new Date();
    // startDate = this.convert(startDate);

    // this.state = {
    //   startDate,
    //   endDate: startDate
    // };
    this.handleDateChange = this.handleDateChange.bind(this);

  }
  mydiff = (date1,date2,interval) => {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            -
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.floor(timediff / week);
        case "days"   : return Math.floor(timediff / day); 
        case "hours"  : return Math.floor(timediff / hour); 
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
  }
  handleDateChange(i, event) {
    this.setState({ [i]: event.target.value });
    let { startDate, endDate, totalDays = 0 } = this.state;
    totalDays = this.mydiff(startDate, endDate, "days");
    this.setState({totalDays});
  }
  convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  getToday = () => {
    let date = new Date();
    return this.convert(date); 
  }
  render () {
    const { startDate, endDate, totalDays = 0 } = this.state;
    return (
      <div className="Date Calculator row">
      <section className='col-sm-6 pl-5 mt-5 mx-auto'>
        <h1 className='h1 mb-5 text-center'>Date Calculator</h1>
        <div className='form-group row mb-5'>
          <p className='col-3 mb-0 p-1'>Start Date</p>
          <input className='col-5' type="date" value={startDate} onChange={this.handleDateChange.bind(this,'startDate')}/>
          <div className='col-auto'>
            <button className='btn btn-primary' onClick={() => this.setState({startDate: this.getToday()})}>Today</button>
          </div>
        </div>
        <div className='form-group row'>
          <p className='col-3 mb-0 p-1'>End Date</p>
          <input className='col-5' type="date" value={endDate} onChange={this.handleDateChange.bind(this, 'endDate')}/>
          <div className='col-auto'>
            <button className='btn btn-primary' onClick={() => this.setState({endDate: this.getToday()})}>Today</button>
          </div>
        </div>
        <div className='form-group row mt-5'>
          {/* <p className='col-3 mb-0 p-1'>End Date is {endDate}</p>
          <p className='col-3 mb-0 p-1'>Start Date is {startDate}</p> */}
          <h4 className='col-3 mb-0 p-1 h4 mx-auto'>Total days are {totalDays}</h4>
        </div>
        </section>
        {/* <NameForm />
        <LoginControl /> */}
    </div>)
  };
  };
