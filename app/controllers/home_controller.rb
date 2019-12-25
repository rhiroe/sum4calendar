class HomeController < ApplicationController
  def index; end

  def calendar
    @sum4dates = data.pluck(:start)
    render json: data
  end

  private

  def data
    stert_day, end_day = params.permit(:start, :end).values.map(&:to_date)
    (stert_day..end_day).map do |day|
      num = day.to_s.split('-').flat_map { _1.chars.map(&:to_i) }.sum
      while num >= 10
        num = num.to_s.chars.map(&:to_i).sum
      end

      num == 4 ? { start: day, title: '4の日' } : {}
    end
  end
end
