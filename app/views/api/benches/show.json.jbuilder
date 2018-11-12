json.benches do
  json.set! @bench.id do
    json.extract! @bench, :id, :description, :lat, :lng
  end
end
