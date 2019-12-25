class HomeController < ApplicationController
  def index; end

  def calendar
    render json: data
  end

  private

  def data
    stert_day, end_day = params.permit(:start, :end).values
    (stert_day..end_day).map do |day|
      num = day.split('-').flat_map { _1.chars.map(&:to_i) }.sum
      while num >= 10
        num = num.to_s.chars.map(&:to_i).sum
      end

      num == 4 ? { start: day, title: '4の日' } : {}
    end
  end
end
