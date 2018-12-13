import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl, CarouselCaption } from "reactstrap";
import "./reviewCarousel.scss";

export default class ReviewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {}

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.data.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  prev() {
    if (this.animating) return;
    const prevIndex = this.state.activeIndex === 0 ? this.props.data.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: prevIndex });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    let { activeIndex } = this.state;
    const slides = this.props.data.map((item, indx) => {
      return (
        <CarouselItem key={indx} onExiting={this.onExiting} onExited={this.onExited}>
          <p>{item.review}</p>
        </CarouselItem>
      );
    });
    return (
      <div className="row ">
        <div className="offset-md-3 col-md-6  reviews">
          <h2>Reviews</h2>
          <Carousel activeIndex={activeIndex} next={this.next} previous={this.prev}>
            <CarouselIndicators items={this.props.data} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.prev} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      </div>
    );
  }
}
