import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import Filter from './Filter';
import FilterDate from './FilterDate';
import Sort from './Sort';
import ChangeView from './ChangeView';
import SelectionOperation from './SelectionOperation';
import Export from './Export';
import AddTodoButton from './AddTodoButton';

function Controllers({ controllers }) {
	const { search, filter, filterDate, sort, dataView, openAddTodo } =
		controllers;
	return (
		<Container>
			<Row>
				<Col>Search Panel</Col>
				<div className="clearfix mt-1"></div>
				<Col>
					<Filter value={filter.value} setValue={filter.changeFilter} />{' '}
					<FilterDate
						value={filterDate.value}
						setValue={filterDate.changeFilterDate}
					/>{' '}
					<Sort value={sort.value} toggleSort={sort.toggleSort} />
				</Col>
				<div className="clearfix d-block d-md-none mt-1"></div>
				<Col className="text-md-center">
					<ChangeView
						currView={dataView.currView}
						changeView={dataView.changeView}
					/>
				</Col>
				<div className="clearfix d-block d-md-none mt-1"></div>
				<Col className="text-md-end">
					<SelectionOperation /> <Export />{' '}
					<AddTodoButton openAddTodo={openAddTodo} />
				</Col>
			</Row>
		</Container>
	);
}

Controllers.propTypes = {
	controllers: PropTypes.object.isRequired,
};

export default Controllers;
