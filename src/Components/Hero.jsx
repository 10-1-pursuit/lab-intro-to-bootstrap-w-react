const Hero = () => {

          {/* Add row to group columns horizontally to ensure proper spacing */}
          {/* p-4 adds padding around the blockquote to ad space between content and the border */}
          {/* col-md-12 creates a column within the row and the column should span the full width of the container on medium-sized screens and above. */}
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <blockquote className="blockquote text-center p-5 border bg-light">
              <p className="script-font h1">
                "Travel is the only thing you buy that makes you richer..."
              </p>
            </blockquote>

          </div>
        </div>
      </div>
    )
}

export default Hero