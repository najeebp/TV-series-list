import React, { Component } from 'react'
import { connect } from 'react-redux'
import SeriesList from '../../components/SeriesList'

import { fetchSeries } from '../../actions'
import _ from 'lodash'
import { LOAD_JSON_URL } from '../../actions/constants'

class Series extends Component {

	constructor() {
		super()
		this.state = {
			showSearchField: false,
			scroll_count: 1,
			search_string: "",
			seriesListDup:[]
		}
	}

	componentWillMount() {
		fetch(`${LOAD_JSON_URL}1`)
			.then((response) => response.json())
			.then((result) => { this.props.fetchSeries(result) })
	}

	componentDidMount() {
		window.addEventListener("scroll", this.onScroll.bind(this), false);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll.bind(this), false);
	}

	onScroll() {
		var nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
		if (this.state.scroll_count < 3 && nearBottom) {
			this.setState({ scroll_count: this.state.scroll_count + 1 })

			fetch(`${LOAD_JSON_URL}${this.state.scroll_count}`)
				.then((response) => response.json())
				.then((result) => { this.props.fetchSeries(result) })
		}
	}

	onChangeTextInput(event) {
		let updatedSeriesList = _.filter(this.props.seriesList, (series) => { return series.name.indexOf(event.target.value) > -1 });
		this.setState({seriesListDup: updatedSeriesList, search_string: event.target.value})
	}

	render() {
		return (
			<div style={{ backgroundColor: 'black' }}>
				<div className="px-2 fixed pin">
					<img className="w-full relative " src={require(`../../assets/images/nav_bar.png`)} alt="naviation bar" />
					<img className="absolute w-4" src={require(`../../assets/images/Back.png`)} alt="back" style={{ top: '14px', left: '16px' }} />
					<img className="absolute w-4" src={require(`../../assets/images/search.png`)} alt="search icon" style={{ top: '14px', right: '10px' }} onClick={() => { this.setState({ showSearchField: !this.state.showSearchField }) }} />
					{this.state.showSearchField && <input className="absolute rounded" type="text" style={{ width: '46%', top: '10px', right: '33px' }} onChange={(event) => this.onChangeTextInput(event)} />}
					<div className="absolute text-white" style={{ top: '14px', left: '45px' }}> {this.props.title} </div>
				</div>
				<SeriesList data={this.state.search_string ? this.state.seriesListDup : this.props.seriesList} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		seriesList: state.series.seriesList,
		title: state.series.title,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSeries: (payload) => dispatch(fetchSeries(payload)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Series)