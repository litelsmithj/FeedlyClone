@feeds.each do |feed|
    json.set! feed.id do
        json.extract! feed, :id, :name #, :layout, :sort
    end
end