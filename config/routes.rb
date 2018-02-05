Rails.application.routes.draw do
  namespace :v1 do

    get 'parse/venues' => 'parse_venues#get_venues'

  end
end
