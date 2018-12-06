import React from 'react'
import LazyLoad from 'react-lazy-load'

const SeriesListItem = (props) =>
	props.data.map((item) =>
		<div className="w-1/3 px-2">
			<LazyLoad height={200}>
				<div>
					<img className="w-full" src={require(`../../assets/images/${item['poster-image']}`)} alt="Sunset in the mountains" />
					<p className="text-grey-darker text-base">{item.name}</p>
				</div>
			</LazyLoad>
			<br />
		</div>
	)

const SeriesList = (props) => {
	return (
		<div>
			<div className="px-2 overflow-hidden">
				<div className="flex -mx-2 flex-wrap">
					<SeriesListItem data={props.data} />
				</div>
			</div>
		</div>
	)
}


export default SeriesList