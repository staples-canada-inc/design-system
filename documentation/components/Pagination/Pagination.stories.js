import React from "react";
import { storiesOf } from "@storybook/react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

storiesOf("Navigation/Pagination", module)
	.add("Default", () => (
		<div>
			<Pagination aria-label="Page navigation example">
				<PaginationItem>
					<PaginationLink first href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">4</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">5</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last href="#" />
				</PaginationItem>
			</Pagination>
		</div>
	))
	.add("Large", () => (
		<Pagination size="lg" aria-label="Page navigation example">
			<PaginationItem>
				<PaginationLink first href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink previous href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">1</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">2</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">3</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink next href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink last href="#" />
			</PaginationItem>
		</Pagination>
	))
	.add("Small", () => (
		<Pagination size="sm" aria-label="Page navigation example">
			<PaginationItem>
				<PaginationLink first href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink previous href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">1</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">2</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">3</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink next href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink last href="#" />
			</PaginationItem>
		</Pagination>
	));
 