import React from 'react';
import { connect } from 'react-redux';

class Sweaters extends React.Component {
    render() {
        return (
            <div className="sweatshots">
                {this.props.Sweatshots.map((sweater, index) => {return <div><img key={`Sweater_${index}`} alt={`Sweater_${index}`} src={sweater.imageUrl}></img><h2>{sweater.name}</h2></div>})}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Sweatshots: state.items
    }
}

export default connect(mapStateToProps, null)(Sweaters);