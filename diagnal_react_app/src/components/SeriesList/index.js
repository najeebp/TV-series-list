import React from 'react'
import LazyLoad from 'react-lazy-load'

const SeriesListItem = (props) =>
	props.data.map((item, index) => {
		return (<div key={index} className="w-1/3 px-2">
			<LazyLoad>
				<div>
					<img className="w-full" onError={(e) => this.src = require(`../../assets/images/placeholder_for_missing_posters.png`)} src={imageUrl(item)} alt="Sunset in the mountains" />
					<p className="text-grey-darker text-base">{item.name}</p>
				</div>
			</LazyLoad>
			<br />
		</div>)
	})

const imageUrl = (item) => {
	try { return require(`../../assets/images/${item['poster-image']}`) }
	catch (e) { return require(`../../assets/images/placeholder_for_missing_posters.png`) }
}

const SeriesList = (props) => {
	return (
		<div>
			<div className="px-2 overflow-hidden">
				<div className="flex -mx-2 flex-wrap" style={{ overflow: 'auto' }}>
					<SeriesListItem data={props.data} />
				</div>
			</div>
		</div>
	)
}

export default SeriesList
