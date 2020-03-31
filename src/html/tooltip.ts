import { TooltipFormatterContextObject } from "highcharts";
import dayjs from "dayjs";
import { ChartUnitType } from "../types";

export function CustomTooltip(type: ChartUnitType = "normal") {
  return function(this: TooltipFormatterContextObject) {
    return `
      <div class="custom-tooltip-container">
        <p class="custom-tooltip-title">${dayjs(this.x).format(
          "YYYY/MM/DD",
        )}</p>
        <div class="custom-tooltip-content">
          <p class="custom-tooltip-text">
            <span class="circle" style="background-color:${
              this.point.color
            }"></span>
            ${this.series.name}:
            <span class="custom-tooltip-value">
              <b>${
                type === "price"
                  ? `¥${this.point.y?.toLocaleString()}`
                  : this.point.y?.toLocaleString()
              }</b>
            </span>
          </p>
        </div>
      </div>
    `;
  };
}
