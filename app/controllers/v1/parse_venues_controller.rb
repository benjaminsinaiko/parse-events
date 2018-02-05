class V1::ParseVenuesController < ApplicationController

  def get_venues
    response = Unirest.get("https://parseapi.back4app.com/classes/Venues?limit=200",
      headers:{ "X-Parse-Application-Id" => "#{ENV['PROD_APP_ID']}",
      "X-Parse-REST-API-Key" => "#{ENV['PROD_API_KEY']}"})
    venues = response.body["results"]
    render json: venues.as_json
  end

end
